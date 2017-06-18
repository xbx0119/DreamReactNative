react native的调试　command + M


使用自定义字体：http://www.jianshu.com/p/96d5c66791c3

react-native-vector-icons
 http://ionicons.com/

react-navigation: https://reactnavigation.org/docs/navigators/tab
关于如何嵌套导航：
查看github issue :https://github.com/react-community/react-navigation/issues/1849
StackNavigator
- TabNavigator
- DrawerNavigator

```
Android Twitter的例子：

StackNavigator
- Login Screen
- Home Screen
  + TabNavigator
    - Feed
    - Search
    - Notifications
    - Messages
- DrawerNavigator
  (custom made the content & drawer list to call navigation.navigate)
- Profile
- Highlights
- Moments
- Lists
- Connect
...etc
```

关于shadow:
shadowColor shadowOffset shadowOpacity shadowRadius
这些属性，目前只适用于IOS系统，android的话，有一个替代属性elevation，这个属性影响着元素的z-index，就是绝对定位时的覆盖顺序(上面我们提到过)，也会在元素上产生一个阴影。
https://stackoverflow.com/questions/42210847/react-native-how-to-customize-android-elevation-shadow


react-native-swiper:
安卓上与tabnavigator共用时图片内容不显示
解决方案：http://www.cnblogs.com/cielu/p/6940184.html
参考github issue : https://github.com/leecade/react-native-swiper


reactnative如何实现checkbox:http://www.peng8.net/2016/07/06/write-checkbox-component-in-React/