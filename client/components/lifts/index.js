import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import VideoPlayer from '../Video/VideoPlayer';
import Card from '../Video/Card';
import 'whatwg-fetch'

import './style.css';


export default class Lifts extends Component {


  getSomething() {
    
    fetch('/api/chicos')
      .then(function(response){
        console.log(response)
        return response.text()
      })
  }
  render() {
    const { className, ...props } = this.props;
    var cholos = "cholos"
    var values = this.getSomething();
    return (
    <Page>
      <Grid>
        <GridColumn medium={4}>
          <h1>Main heading</h1>
          <p>
            {this.getSomething()}
            {cholos}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
        <GridColumn medium={4}>
          <h2>Sidebar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
        <GridColumn medium={4}>
          <h2>Content below which takes up remaining space</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
            perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto,
            quas vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
       
        <GridColumn medium={12}>
          <Card />
        </GridColumn>
      </Grid>
   </Page>
    )
  }

}
