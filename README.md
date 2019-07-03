# react-adaptive-layout

> React component that helps to make adaptive layout.


[![npm version](https://badge.fury.io/js/react-adaptive-layout.svg)](https://badge.fury.io/js/react-adaptive-layout)


## Install

```bash
npm install react-adaptive-layout
```
or

```bash
yarn add react-adaptive-layout
```

## Usage

This is basic example:
```jsx
import Layout from 'react-adaptive-layout'
...
render(){
    return(
       <Layout>
            {
                ({width}) => {
                    return width < 768
                        ? <img 
                            src="http://placekitten.com/g/300/300" 
                            alt="Wanna some small kitty"/>
                        : <img 
                            src="http://placekitten.com/g/800/600" 
                            alt="Wanna some big kitty"/>
                }
            }
        </Layout>
    )
}
```
You can provide a prop `shouldRender` and use it as common component:

```jsx 

<Layout shouldRender={ window.innerWidth > 1280.991 }>
    <p>
        Welcome PC user =)
    </p>
</Layout>
```

## Static methods.
Here are some helper methods and constants.
## Layout.breakpoints
Default breakpoints.

| Name | Width |
| ---  |  ---  |
|  xs  |  480  |
|  sm  |  576  |
|  md  |  990  |
|  lg  |  1024 |
|  xl  |  1280 |
|  xxl |  1920 |

```js
Layout.breakpoints.sm => 576
```

## Layout.inRange(value, start, end) => `boolean`
Check if value between start and end.

| Param | Type | Description |
| --- | --- | --- |
| value | `number` |  |
| start | `string | number` | One of Layout.breakpoints key or a number |
| end | `string | number` | One of Layout.breakpoints key or a number |

**Example**  
```js
Layout.inRange(1280, 'sm', 1024) => true
```

## Layout.setBreakPoint(point)
Add or update breakpoints.

| Param | Type | Description |
| --- | --- | --- |
| point | `Object` | Object to merge with break points. |

**Example**  
```js
Layout.setBreakPoint({custom: 320, sm: 480})
```

## Layout.isMobile(), Layout.isTablet(), Layout.isDesktop()
Checking screen width.
```js
Layout.isMobile() => true
Layout.isTablet() => false
```

## License

MIT © [Dmitriy Dymarchyk](https://github.com/dymarchyk)
