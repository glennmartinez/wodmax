import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';
import ContentWrapper from '../globals/ContentWrapper';
import PageTitle from '../globals/PageTitle';
import graduationImage from '../Navigation/graduates.png';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      // <div className={classnames('About', className)} {...props}>
      //   <h1>
      //     About check it out too cool
      //   </h1>
      // </div>

      <ContentWrapper>
        <PageTitle>
          Welcome to Confluence Academy
        </PageTitle>
        <img className="mainImage" alt="nucleus" src={graduationImage} />
      <section>
       <p> 
        </p>
      </section>
      </ContentWrapper>
    );
  }
}
