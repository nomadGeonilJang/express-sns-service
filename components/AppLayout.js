import React,{useState} from 'react';
import {Menu, Input, Row, Col, Card, Avatar, Form, Button} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import Profile from './Profile';

const AppLayout = ({children}) => {
  const {isLoggedIn} = useSelector(state=> state.user);
  return (
    <>
      <Head>
        <title>리액트!</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>홈으로</a></Link></Menu.Item>
        { isLoggedIn && <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>}
        { !isLoggedIn && <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item> }
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <Profile/>: <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="http://geonil.kr"><a>Made By Geonil Jang</a></Link>
        </Col>
      </Row>

    </>
  )
}

AppLayout.propTypes = {
  children:PropTypes.node,

}



export default AppLayout;
