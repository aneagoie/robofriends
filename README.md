# robofriends

Tutorial for React
To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Update CRA: go to Json package, scripts and change the react script version to new version, run npm install

- npm audit //Will show vulnerabilities
- npm update will update dependencies to newer versions
- npm audit fix--force //This will force any new updates

### Font

- Search for desired font. In this SEGA LOGO FONT was used. Get it from `[CufOnFonts]`( http://www.cufonfonts.com)
- Import it in App.css
- Drop the SEGA.wooff file in project file

### API

- [jsonplaceholder ](https://jsonplaceholder.typicode.com/) is a free fake API for testing and prototyping powered by JSON Server + LowDB

### CSS

[Tachyons CSS Toolkit](https://tachyons.io/) - Tachyons is a CSS framework, but unlike other well-known frameworks like Foundation and Bootstrap, it doesn't come with pre-built UI components. Instead it aims to break down CSS rules into as small and reusable parts as possible.

- Install Tachyons with npm and import it in index.js

### Class components lifecyle

#### Mounting methods are called when an instance of component is being created and inserted into the DOM

- constructor()
- componentWillMount()
- render()
  componentDidMount()

#### Updating methods. an update canb e caused by changes to props or state. These methos are called when a component is being re-rendered:

- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

#### Error handling

- ErrorBoundry component will wrap the card list component. If something goes wrong it will show an error message. This will work only on production.

```
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oops... There was an error</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
```

#### Deployement

- [CRA deployemnt](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)
