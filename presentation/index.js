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
              <Quote>The smallest detail can f**k up the whole experience bro!</Quote>
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
        <Slide transition={["slide"]} bgImage={images.cheering} bgDarken={0.3}>
          <Heading size={1} textColor="primary" margin="0 0 25px" fit>
            🎉 react-router-navigation 🎉
          </Heading>
          <Code textColor="primary">v1</Code>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.background}
          bgDarken={0.8}
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
        >
          <Heading size={6} textColor="tertiary" caps>Shoutouts</Heading>
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
          <Heading size={6} textColor="tertiary" caps>Any questions?</Heading>
          <Appear>
            <Text margin="30px 0 0" textSize={33} textColor="primary" fit>
              👉 Medium article: Thousand Ways to Navigate in React Native 👈
            </Text>
          </Appear>
          <Appear>
            <Text margin="50px 0 30px" textSize={35} textColor="primary">
              🐥 @Leo_LeBras • @Charles_Mangwa 🐥
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
