import React from 'react';

import { BackTop } from 'antd';

import {TwitterCircleFilled, InstagramFilled, LinkedinFilled, FacebookFilled} from '@ant-design/icons';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><FacebookFilled /></a></li>
          <li><a href="https://www.twitter.com/"><TwitterCircleFilled /></a></li>
          <li><a href="https://www.linkedin.com/"><LinkedinFilled /></a></li>
          <li><a href="https://www.instagram.com/"><InstagramFilled /></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>{/* assasa */}
    </div>
  );
}

export default AppFooter;