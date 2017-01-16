# todoapp-cssmodules

> The original refactored using [CSS Modules](https://github.com/css-modules/css-modules)

This directory contains the original files refactored to use CSS Modules.

**Build Process Notes**

`create-react-app` does not support CSS Modules out of the box. In order to enable CSS Modules, I ran `npm run eject` and edited the `css-loader` configuration.

Original Config:
```javascript
{
  test: /\.css$/,
  loader: 'style!css?importLoaders=1!postcss'
}
```

Updated Config:
```javascript
{
  test: /\.css$/,
  loader: 'style!css?modules&importLoaders=1!postcss'
}
```
