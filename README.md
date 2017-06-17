# DreamReactNative

## 神奇的名字：梦梦

基于React Native开发的安卓app



attention:
* 路径：./node_modules/react-navigation/src/views/Drawer/DrawerNavigatorItems.js
  DrawerNav中会显示第一条导航，需要禁止显示；在AppNav中可能需要改动props，数据结构太复杂，直接改动包的源码
    59：if(index != 0) {
        return (   
          ***
        );
      }
