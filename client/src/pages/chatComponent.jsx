import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

import { Link } from 'react-router-dom';
//import './HomeReq/home.css';
//import './HomeReq/MediaQuery.css';
import { chatSession } from './utils/geminiutil';

// Light and Dark theme definitions
const lightTheme = {
  background: '#fafafa',
  text: '#333',
  navbar: '#333',
  navbarText: '#fff',
  messageBackground: '#fff',
  userMessageBackground: '#DCF8C6',
  inputBackground: '#fff',
  inputText: '#333',
  buttonBackground: '#007bff',
  buttonText: '#fff',
  buttonHoverBackground: '#0056b3',
};

const darkTheme = {
  background: '#1e1e1e',
  text: '#fff',
  navbar: '#444',
  msgColor:"white",
  navbarText: '#fff',
  messageBackground: '#333',
  userMessageBackground: '#3e4e59',
  inputBackground: '#333',
  inputText: '#fff',
  buttonBackground: '#555',
  buttonText: '#fff',
  buttonHoverBackground: '#777',
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: ${props => props.theme.navbar};
  height: 86px;
  box-sizing: border-box;
  overflow: hidden;

  .logo {
    color: ${props => props.theme.navbarText};
    text-decoration: none;
    font-weight: 600;
    font-size: xx-large;
    font-family: var(--font-02);
    text-shadow: .5px .5px 3px var(--global-color-1);
    transition: .4s;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .menuToggle {
    display: none;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
  }

  li {
    position: relative;
  }

  a {
    font-size: 1.1em;
    padding: 20px 15px;
    text-decoration: none;
    color: ${props => props.theme.navbarText};
    display: block;
    font-weight: 500;
    transition: all .4s ease;
  }

  a:hover {
    color: orchid;
  }

  .wap a {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    .menuToggle {
      display: block;
      cursor: pointer;
      margin-left: auto;
    }

    .menuToggle div {
      width: 35px;
      height: 3px;
      background: ${props => props.theme.navbarText};
      margin: 6px 0;
    }

    ul {
      display: ${props => (props.menuActive ? 'block' : 'none')};
      position: fixed;
      top: 86px;
      left: 0;
      width: 100%;
      background-color: ${props => props.theme.navbar};
      padding: 0;
      box-sizing: border-box;
    }

    li {
      width: 100%;
      text-align: center;
      padding: 10px 0;
      border-top: 1px solid #434343;
    }

    a {
      padding: 10px;
    }
  }
`;

const ChatContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 86px);
  padding: 20px;
  margin-top: 86px;
  background: ${props => props.theme.background};
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size:2rem;
  margin-bottom: 10px;
    overflow: hidden; /* Ensures no scrollbar appears */

  color: ${props => props.theme.text};
`;


const Description = styled.p`
  font-size: 1.2em;
  color: ${props => props.theme.text};
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: ${props => props.theme.messageBackground};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.theme.msgColor};

  background: ${props => (props.isUser ? props.theme.userMessageBackground : props.theme.messageBackground)};
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  line-height: 27px;
  animation: ${fadeIn} 0.5s ease-out;

  /* Handling the bold text */
  b {
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${props => props.theme.inputBackground};
  color: ${props => props.theme.inputText};
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.buttonHoverBackground};
  }
`;

const ThemeToggle = styled.button`
  padding: 10px 20px;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.buttonHoverBackground};
  }
`;

const MessageComponent = ({ isUser, text }) => (
  <Message isUser={isUser} dangerouslySetInnerHTML={{ __html: text }} />
);

const ChatComponent = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState(lightTheme);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleThemeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      const newMessages = [...messages, { text: userMessage, isUser: true }];
      setMessages(newMessages);
      setInput('');

      try {
        const modifiedInput = " You are a specialized beauty AI agent designed to provide expert advice and information exclusively related to beauty, cosmetics, makeup, skincare, hair care, and salon services for both men and women. You should only respond to inquiries within these areas, including tips, tricks, product recommendations, techniques, trends, and salon-related topics. If a user asks about anything outside these beauty-related subjects, kindly inform them that your expertise is limited to beauty and salon topics." + userMessage;

        const result = await chatSession.sendMessage(modifiedInput);
        const ans = result.response.text();

        let responseArray = ans.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
          if (i === 0 || i % 2 === 0) {
            newResponse += responseArray[i];
          } else {
            newResponse += "<b>" + responseArray[i] + "</b>";
          }
        }

        let formattedResponse = newResponse.split("*").join("</br>");

        // Remove "undefined" at the beginning if present
        if (formattedResponse.startsWith("undefined")) {
          formattedResponse = formattedResponse.slice(9);
        }

        // Add line breaks after each numbered point
        formattedResponse = formattedResponse.replace(/(\d\.\s)/g, "</br>$1");

        setMessages([...newMessages, { text: formattedResponse, isUser: false }]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages([...newMessages, { text: "Error sending message", isUser: false }]);
      }
    }
  };

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar menuActive={menuActive}>
          <Link to="/" className="logo">FTV</Link>
          <div className="menuToggle" onClick={toggleMenu}>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
          </ul>
          <ThemeToggle onClick={handleThemeToggle}>
            {theme === lightTheme ? <BsToggle2Off /> :  <BsToggle2On />           }
          </ThemeToggle>
        </Navbar>

        <ChatContainer style={animationProps}>
          <Header>
            <Title>Beauty AI</Title>
            <Description>Ask Beauty AI for tips, tricks, and advice to enhance your beauty routine!</Description>
          </Header>
          <MessagesContainer>
            {messages.map((msg, index) => (
              <MessageComponent key={index} isUser={msg.isUser} text={msg.text} />
            ))}
          </MessagesContainer>
          <InputContainer>
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <Button onClick={handleSend}>Send</Button>
          </InputContainer>
        </ChatContainer>
      </>
    </ThemeProvider>
  );
};

export default ChatComponent;
