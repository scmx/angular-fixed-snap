angular-fixed-snap
==================

Minimal Snap.js clone written for Angular.js


[Example index.html at 5minfork.com](http://5minfork.com/scmx/angular-fixed-snap)

[GitHub repository](https://github.com/scmx/angular-fixed-snap)

## Installation

```bash
# Install via bower
bower install --save angular-fixed-snap
```

## Setup

```javascript
// Include the angular module
angular.module('example', [
  'fixed-snap'
]);
```

```html
<!-- Minimal markup -->
<body>
  <div snap-fixed>
    <!-- This is your topbar (position: fixed) -->
  </div>
  <div snap-drawer="left">
    <!-- This is your left sidebar (optional) -->
  </div>
  <div snap-drawer="right">
    <!-- This is your right sidebar (optional) -->
  </div>
  <div snap-static="">
    <!-- This is your main content (position: static) -->
  </div>
</body>
```

## Contributing

Pull requests are welcome
