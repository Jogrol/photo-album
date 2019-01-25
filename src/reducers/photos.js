



const breed = this.props.match.params.breed
request
  .get(`https://dog.ceo/api/breed/${breed}/images`)
  .then(response => this.updateImages(response.body.message))
  .catch(console.error)
}

updateImages(images) {
this.setState({
  images: images
})
}