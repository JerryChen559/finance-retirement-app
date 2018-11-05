const { DOMAIN, CLIENT_ID, CLIENT_SECRET, REACT_APP_CLIENT } = process.env;
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new Auth0Strategy(
      {
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "/login",
        scope: "openid"
      },
      (_, __, ___, profile, done) => done(null, profile)
    )
  );

  // passport.serializeUser((user, done) => {
  // user object give provides user.id which is the auth ID
  // console.log(user.id);
  //   done(null, user);
  // });

  // matt version
  // passport.serializeUser((user, done) => {
  //   app
  //     .get("db")
  //     .getuser(user.id)
  //     .then(response => {
  //       if (!response[0]) {
  //         app
  //           .get("db")
  //           .adduser([
  //             user.displayName,
  //             user.id,
  //             user.emails[0].value,
  //             user.picture
  //           ])
  //           .then(res => {
  //             return done(null, res[0]);
  //           })
  //           .catch(err => console.log(err));
  //       } else {
  //         return done(null, response[0]);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // });

  // users log in. new users get added to the db
  // my version
  passport.serializeUser((user, done) => {
    // console.log(`"profile:" ${JSON.stringify(user)}`);
    const db = app.get("db");

    db.get_user(user.id)
      .then(user2 => {
        if (!user2[0]) {
          db.add_user(user.id)
            .then(response => {
              console.log(`added profile: ${response}`);
              return done(null, response[0]);
            })
            .catch(err => console.log(err));
        } else {
          console.log("user2 exists as:", user2[0].auth_id);
          return done(null, user2[0]);
        }
      })
      .catch(err => done(err, null));
  });

  passport.deserializeUser((user, done) => {
    console.log("deserializeUser", user, done);
    return done(null, user);
  });
  // passport.deserializeUser((profile, done) => done(null, profile));

  app.get(
    "/login",
    passport.authenticate("auth0", {
      successRedirect: `${REACT_APP_CLIENT}/incomestatement`,
      failureRedirect: "/login"
    })
  );
  app.get("/success", (req, res) => {
    res.status(200).json(req.user);
  });

  // app.get("/success", (req, res) => {
  //   console.log("requser", req.user);
  //   res.redirect(REACT_APP_CLIENT);
  // });
  //     // const db = app.get("db");
  //     // db.get_user(auth_id)
  //     //   .then(response => {
  //     //     res.status(200).json(response);
  //     //   })
  //     //   .catch(err => res.status(500).send(err));
  // });

  // Access current user. Pass current user to profileReducer.
  // -nogo
  // app.get("/api/userprofile",(req,res)=>{
  //    const db = app.get("db");
  //     db.get_user()
  //       .then(response => {
  //         res.status(200).json(response);
  //       })
  //   .catch(err => res.status(500).send(err));
  // })

  // app.get("/logout", logout);
  // Logout user - nogoyet
  // const logout = (req, res) => {
  //   req.session.destroy(() => {
  //     res.redirect("http://localhost:3000/");
  //   });
  // }
};
