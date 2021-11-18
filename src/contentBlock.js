import { LightningElement, api } from "lwc";

export default class ContentBlock extends LightningElement {

@api gamerList = [];
@api title;

connectedCallback() {
}

handleLeftClick() {
  const card = this.template.querySelector(".slds-card");
  const contentContainer = this.template.querySelector(".container");
  let scrollDistance = card.clientWidth * 4.55;
  contentContainer.scrollLeft += scrollDistance;
}
}