import React, { Component } from 'react'
import Body_BannerComp from './BodyComps/Body_BannerComp'
import Body_ItemComp from './BodyComps/Body_ItemComp'
import FooterComp from './FooterComps/FooterComp'
import HeaderComp from './HeaderComps/HeaderComp'

export default class LayOut_exNo1 extends Component {
  render() {
    return (
      <>
      <HeaderComp />
      <Body_BannerComp />
      <div className="body__item d-flex row justify-content-center">
      <Body_ItemComp />
      <Body_ItemComp />
      <Body_ItemComp />     
      <Body_ItemComp />   
      <Body_ItemComp />
      </div>
      <FooterComp />
      </>
    )
  }
}
