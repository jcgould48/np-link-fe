import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Personal from './PersonalInfo'
import Professional from './ProfessionalInfo'
import Terms from './Terms'
import Summary from './Summary'






class MainProfessional extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    
    return (
      <div>
        {page === 1 && <Personal onSubmit={this.nextPage} />}
        {page === 2 && (
          <Professional
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <Terms
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <Summary
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

MainProfessional.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MainProfessional