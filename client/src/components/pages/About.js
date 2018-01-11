import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    padding: '20px'
  },
  header: {
    padding: '5px',
    color: 'gray'
  }
}

const About = () =>
  <div style={styles.container}>
    <Card>
      <div>
        <Typography style={styles.header} type='display1' gutterBottom>
          This is the about page.
        </Typography>
      </div>
    </Card>
  </div>

export default About
