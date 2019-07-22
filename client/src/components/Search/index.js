import React from "react";
import { MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdbreact";
// import countries from "./countries";

class SearchPage extends React.Component {
  state = {
    // dataSet: countries,
    // filteredSet: countries,
    searchValue: "",
    modalOpen: false
  }

  // handleSearch = event => this.setState({ searchValue: event.target.value }, () => this.searchForCountry());

  searchForCountry = () => {
    this.setState(prevState => {
      const filteredSet = prevState.dataSet.filter(item => item.toLowerCase().match(this.state.searchValue.toLowerCase()));
      return { filteredSet };
    });
  }

  toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    return (
      <div>
        <MDBBtn style={{ position:'absolute', zIndex:'1', backgroundColor:'gold'}} onClick={this.toggleModal}>Search for Produce</MDBBtn>
        <MDBModal isOpen={this.state.modalOpen} toggle={this.toggleModal} backdrop={false} size="md" side position="top-right">
          <MDBModalHeader toggle={this.toggleModal}><h5>Find Produce near You.</h5></MDBModalHeader>
          <MDBModalBody>
            <MDBInput value={this.state.searchValue} onChange={this.handleSearch} hint="Search" type="text" containerClass="mt-0" />
            <MDBListGroup>
              {/* { */}
                {/* this.state.filteredSet.map(item => ( */}
                  <MDBListGroupItem >
                    {/* // key={item} */}
                    {/* > */}
                    {/* {item} */}
                    </MDBListGroupItem>
                {/* )) */}
              {/* } */}
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleModal}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default SearchPage;