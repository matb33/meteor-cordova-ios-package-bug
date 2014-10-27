# Meteor Cordova iOS package name bug ending with "cordova"

1. Clone this repo
2. Run `meteor run ios-device` (possibly do `meteor add-platform ios`)
3. Once in xcode, Run -- app should load
4. In xcode, Stop
5. On phone, delete the app
6. In xcode, Run -- should get security error
7. On phone, tap to start app
8. Tap "Trust" -- app should load
9. In xcode, Run -- app should close and start up again, producing error.

At this point you should be able to find the `app-cordova_plugins.js` in the
logs near the bottom. Looks like it stops dead because it never actually loads
any of the plugins.

Similarly, this can be reproduced in the simulator. You will still do a
`meteor run ios-device` and hop into xcode, but instead of choosing a physical
phone as Destination, choose a simulator model (I tested with iPhone 4s, but it
is unlikely that the model makes a difference here). Then all steps will apply
except that you won't get the security error from step 6 (thus no need to tap
"Trust" etc).