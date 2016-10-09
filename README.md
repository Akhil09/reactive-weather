# Reactive Weather
>Simple realtime weather widget, created with ReactJS and Bootstrap. Since there's really not much styling in place, it's easy to replace it with a different CSS framework of choice.

![Alt Text](https://github.com/bobeta/reactive-weather/raw/master/reactive-weather.gif)

## Features

* Search weather in any city using Open Weather Maps API
* Neat display of todays weather and the upcoming week without page refresh
* Switching between Celsius and Fahrenheit

## Installation

Clone the package into directory of choice:
```
git clone https://github.com/Bobeta/reactive-weather.git
```

 then run (required to have Node installed):

```
npm install
```

Create your free Open Weather Map API key by signing up on [**their website**](https://openweathermap.org/) and add it to src/services/weatherservice.js in the following section:
```
// Add Your API Key
var apiKey = 'yourApiKey';
```

Run the following command to re-compile after adding API key (**ctrl + c to stop**):
```
npm start
```


## Usage and Changes

Just add a tag with id of reactive-weather to wherever you want to display the weather widget, example:
```
<div id="reactive-weather"></div>
```

Make sure that you have main.js added as script file. There's an example usage in public/index.html. 

All the desired changes should be made to the content in the /src directory. After you make changes to JSX files, run the following command:
```
npm start
```

The changes you make to src/main.jsx files and components in src/components will then automatically compile to public/js/main.js. To stop the process, just do **ctrl + c**. 

Bootstrap is already included in public/css/bootstrap.css. You can use included bower setup to add a different sass version and the following command to replace the current css with it:

```
npm run bootstrap
```

Browser-sync functionality is already included out of the box, just run the following command to see your changes being made live:
```
npm run browser-sync
```

## Contributing

You are welcome to contribute to the project if you like, please read [**contributing guide**](CONTRIBUTING.md).

## Credits

[**Reactive Weather**](https://github.com/bobeta/reactive-weather) was created as a [**hacktoberfest**](https://hacktoberfest.digitalocean.com/) educational project by [**Moris Pasic**](https://github.com/bobeta).

Future contributors will be listed here. And finally thank you for showing interest!

## License
```
MIT License

Copyright (c) 2016 Moris Zen Pasic <moris.pasic@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```