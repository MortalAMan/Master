import React from 'react';
import { Grid, Image, Embed } from 'semantic-ui-react';
import '../css/Body.css';
import Jesus from '../images/Jesus.jpg';

class Body extends React.Component {
  render () {
    return(
      <Grid className='body' celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Due to the emerging outbreak of plague in Madagascar, as a precautionary measure, the missionaries serving on the island of Madagascar are in the process of being transferred out of this area or temporarily reassigned to other missions. The missionaries from the Madagascar Antananarivo Mission who are serving on the islands of Mauritius and Reunion will remain. A total of 69 missionaries are being relocated or reassigned. An additional ten missionaries who are nearing the end of their mission service will return home.</p> 
        </Grid.Column>
        <Grid.Column width={3}>
          <p>Ensuring the health and safety of our missionaries is our top priority. In recent weeks measures have been taken to reduce risk to missionaries, including providing them with prescription medication to help prevent plague and asking them to remain in their apartments. There are no reports of illness among the missionaries. Families are being notified as the missionaries are temporarily reassigned. This is a very challenging situation for the missionaries, members and citizens of these countries, and we are taking every practical step to reduce risk and praying for their health and safety.</p>
        </Grid.Column>
      </Grid.Row>
      <div className='player'>
      <iframe width="400" height="250" src="https://www.youtube.com/embed/_S3TI4bYerU" frameborder="0" allowfullscreen></iframe>
      </div>
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Due to the emerging outbreak of plague in Madagascar, as a precautionary measure, the missionaries serving on the island of Madagascar are in the process of being transferred out of this area or temporarily reassigned to other missions. The missionaries from the Madagascar Antananarivo Mission who are serving on the islands of Mauritius and Reunion will remain. A total of 69 missionaries are being relocated or reassigned. An additional ten missionaries who are nearing the end of their mission service will return home.</p>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>Ensuring the health and safety of our missionaries is our top priority. In recent weeks measures have been taken to reduce risk to missionaries, including providing them with prescription medication to help prevent plague and asking them to remain in their apartments. There are no reports of illness among the missionaries. Families are being notified as the missionaries are temporarily reassigned. This is a very challenging situation for the missionaries, members and citizens of these countries, and we are taking every practical step to reduce risk and praying for their health and safety.</p>
        </Grid.Column>
      </Grid.Row>
      <h3>Sub-Heading</h3>
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Due to the emerging outbreak of plague in Madagascar, as a precautionary measure, the missionaries serving on the island of Madagascar are in the process of being transferred out of this area or temporarily reassigned to other missions. The missionaries from the Madagascar Antananarivo Mission who are serving on the islands of Mauritius and Reunion will remain. A total of 69 missionaries are being relocated or reassigned. An additional ten missionaries who are nearing the end of their mission service will return home.</p>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>Ensuring the health and safety of our missionaries is our top priority. In recent weeks measures have been taken to reduce risk to missionaries, including providing them with prescription medication to help prevent plague and asking them to remain in their apartments. There are no reports of illness among the missionaries. Families are being notified as the missionaries are temporarily reassigned. This is a very challenging situation for the missionaries, members and citizens of these countries, and we are taking every practical step to reduce risk and praying for their health and safety.</p>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>Ensuring the health and safety of our missionaries is our top priority. In recent weeks measures have been taken to reduce risk to missionaries, including providing them with prescription medication to help prevent plague and asking them to remain in their apartments.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default Body;
  