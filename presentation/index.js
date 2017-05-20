// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  background: require("../assets/background1.jpg"),
  cheering: require("../assets/MinionsCheering.gif"),
  libraries: require("../assets/libraries.png"),
  minionsgo: require("../assets/MinionsGo.gif"),
  micdrop: require("../assets/micdrop.gif"),
  winoapp: require("../assets/winoapp.gif")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#FEFEFE",
    secondary: "#1B2B34",
    // tertiary: "#E91E63",
    tertiary: "#FCCB28",
    quartenary: "#CECECE",
    minions: "#FCCB28"
  },
  {
    primary: "Catamaran",
    secondary: "Open Sans"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "fade"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.5}
          notes={ 
            <ul>
              <li>Hi eveyrone...</li>
              <li>Aka The Talk Where...</li>
              <li>Let me start by introducing myself real quick:
                  <ul>
                      <li>I’m Charles</li>
                      <li>Student here in Paris</li>
                      <li> I’ve been a volunteer</li>
                      <li> And I've discovered React Native back in June 2015</li>
                  </ul>
              </li>
          </ul>
        }
        >
          <Heading size={4} caps lineHeight={1} textColor="primary">
            ⛵️ Thousand Ways to Navigate in React Native
          </Heading>
          <Appear>
            <div>
              <Text
                margin="30px 0 0"
                textColor="tertiary"
                fit
                textSize={30}
                bold
              >
                aka The Talk Where I Drive You Crazy With Insane Library Names 😁
              </Text>
              <Text textColor="primary" margin="70px 0 0" textSize={25}>
                @Charles_Mangwa
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={4} textColor="minions">Minions Go!</Heading>
          <Image src={images.minionsgo} width={340} height={600} />
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>
            Navigation in mobile apps
          </Heading>
          <Appear>
            <BlockQuote margin="50px 0 0">
              <Quote>The smallest detail can f**k up the whole user experience!</Quote>
              <Cite>Léo Le Bras</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>
             React Native's solutions
          </Heading>
          <List>
            <ListItem margin="10px 0 0">Navigator</ListItem>
            <ListItem margin="10px 0 0">NavigatorIOS</ListItem>
            <ListItem margin="10px 0 0">NavigationExperimental</ListItem>
          </List>
          <Appear>
            <Heading size={3} margin="100px 0 0">😞</Heading>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li>Don’t worry: this is a drop in the ocean of what you can find on NPM</li>
              <li><i>DRINK! </i>🥛</li>
              <li>That’s the part of the talk where you should start understanding its title</li>
            </ul>
          }
        >
          <Image src={images.libraries} width={885} height={590} />
          <Heading size={4} margin="30px 0 0" textColor="minions">
            Bruh 😵…
          </Heading>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="tertiary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>Sounds familiar?</Heading>
          <List>
            <ListItem>
              <Code textColor="primary">react-navigation</Code>
            </ListItem>
            <ListItem>
              <Code textColor="primary">react-native-router-flux</Code>
            </ListItem>
          </List>
          <Appear>
            <List>
              <ListItem>
                <Code textColor="primary">react-native-navigation</Code>
              </ListItem>
              <ListItem>
                <Code textColor="primary">native-navigation</Code>
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <Heading size={3} margin="100px 0 0">🙌</Heading>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="primary">Wino 🍷</Heading>
          <Image src={images.winoapp} width={340} height={600} />
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>
            react-router-native
          </Heading>
          <Appear>
            <BlockQuote margin="50px 0 0">
              <Quote>Just Components</Quote>
              <Heading size={3} margin="100px 0 0" textAlign="center">
                😍
              </Heading>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li><i>DRINK! </i>🥛</li>
              <li>Yeah, I think some of you might see where I’m going with this 😏...</li>
            </ul>
          }
        >
          <Heading size={6} textColor="tertiary" caps>
            react-router-native
          </Heading>
             <BlockQuote margin="50px 0 0">
             <Quote>
                <Heading size={3} textColor="primary" textAlign="center center">It doesn't ship with a navigation structure</Heading>
              </Quote>
            </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.background} bgDarken={0.8}>
          <Heading size={4} textColor="primary" margin="0 0 25px">
            🎉 react-native-router-redux-flux-ex-navigation-experimental-awesome-web-primitives 🎉
          </Heading>
          <Code textColor="primary">v16.0.0-alpha.42</Code>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.cheering} bgDarken={0.3}>
          <Heading size={1} textColor="primary" margin="0 0 25px" fit>
            🎉 react-router-navigation 🎉
          </Heading>
          <Code textColor="primary">github.com/LeoLeBras/react-router-navigation</Code>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>
            The idea
          </Heading>
          <CodePane
            lang="js"
            textSize={25}
            margin="25px 0 0"
            source={require("raw-loader!../assets/reactrouter.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>
            The idea
          </Heading>
          <CodePane
            lang="js"
            textSize={25}
            margin="25px 0 0"
            source={require("raw-loader!../assets/reactrouternavigation.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li><code class='code-inline'>{`<Navigation />`}</code> which renders
                  one screen at a time and provides transitions between screens
              </li>
            </ul>
          }
        >
          <Heading size={6} textColor="primary">Navigation</Heading>
          <CodePane
            lang="js"
            textSize={25}
            margin="25px 0 0"
            source={require("raw-loader!../assets/navigation.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li>These screens which are in turn wrapped into our 2nd component: <code class='code-inline'>{`<Card />`}</code></li>
              <li>So, what you see here is the simplest way to get up and running with <code class='code-inline'>{`react-router-navigation`}</code></li>
              <li>As you can see: we tried to keep the same API</li>
            </ul>
          }
        >
          <Heading size={6} textColor="primary">Card</Heading>
          <CodePane
            lang="js"
            textSize={25}
            margin="25px 0 0"
            source={require("raw-loader!../assets/card.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li>The next 2 components are quite similar</li>
              <li>If you’ve ever struggled navigating inside tab views</li>
            </ul>
          }
        >
          <Heading size={6} textColor="primary">Tabs & Tab</Heading>
          <CodePane
            lang="js"
            textSize={25}
            margin="25px 0 0"
            source={require("raw-loader!../assets/tabs.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li>And last but not least, the core element of our navigation</li>
              <li>As you can see: except particular cases, we tried to keep a constant API among all the components</li>
            </ul>
          }
        >
          <Heading size={6} textColor="primary">Bottom navigation</Heading>
          <CodePane
            lang="js"
            textSize={18}
            margin="25px 0 0"
            source={require("raw-loader!../assets/bottomnavigation.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="primary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>How does it work?</Heading>
          <Appear>
            <BlockQuote margin="50px 0 0">
              <Quote>Just [use] Components</Quote>
              <Heading size={3} margin="100px 0 0" textAlign="center">
                💖
              </Heading>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="tertiary"
          bgImage={images.background}
          bgDarken={0.8}
          notes={
            <ul>
              <li><strong><i>The real heroes</i></strong>, • give props • great people • libraries we rely on</li>
              <li>I'm talking about...</li>
              <li>We use for navigation, transitions, routing, tab bars, deep linking, and a bunch of other cool stuff</li>
              <li>So: let's give a round of applause please, to everyone working on these libraries!</li>
            </ul>
          }
        >
          <Heading size={6} textColor="tertiary" caps>The real heroes</Heading>
          <Appear>
            <List>
              <ListItem>
                <Code textColor="primary">react-router</Code>
              </ListItem>
              <ListItem>
                <Code textColor="primary">react-navigation</Code>
              </ListItem>
              <ListItem>
                <Code textColor="primary">react-native-tab-view</Code>
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <Heading size={3} margin="100px 0 0">👏👏👏</Heading>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          textColor="tertiary"
          bgImage={images.background}
          bgDarken={0.8}
        >
          <Heading size={6} textColor="tertiary" caps>We'd love to hear from you!</Heading>
          <Appear>
            <Text margin="30px 0 0" textSize={33} textColor="primary" fit>
              👉 Medium article: Thousand Ways to Navigate in React Native 👈
            </Text>
          </Appear>
          <Appear>
            <Text margin="50px 0 30px" textSize={35} textColor="primary">
              @Leo_LeBras • @Charles_Mangwa
            </Text>
          </Appear>
          <Appear>
            <Text margin="50px 0 30px" textSize={30} textColor="primary">
              Coming next: native navigation 👀
            </Text>
          </Appear>
          <Appear>
            <Image src={images.micdrop} width={320} height={320} />
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
