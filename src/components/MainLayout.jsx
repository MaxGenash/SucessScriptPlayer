import React, {Component} from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

export default class MainLayout extends Component {
  render() {
    return <div>
      <Header />
      <Content>
        {this.props.children}
      </Content>
      <Footer />
    </div>
  }
}
