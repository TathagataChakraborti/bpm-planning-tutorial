import React from 'react';
import { Document } from '@carbon/icons-react';
import {
  Grid,
  Column,
  StructuredListRow,
  StructuredListCell,
  Tile,
  Link,
} from '@carbon/react';

const generateImageUrl = imageUrl => {
  return `${process.env.PUBLIC_URL}/images/${imageUrl}.png`;
};

const Reference = props => {
  return (
    <StructuredListRow>
      <StructuredListCell className="vertial-align-middle">
        <Link href={props.props.link} target="_blank">
          <Document />
        </Link>
      </StructuredListCell>
      <StructuredListCell>
        <strong>{props.props.title}</strong> by {props.props.authors}. In:{' '}
        {props.props.venue}.
      </StructuredListCell>
    </StructuredListRow>
  );
};

const Instructor = props => {
  return (
    <Column lg={4} md={4} sm={4}>
      <Tile style={{ margin: '10px' }}>
        <Grid>
          <Column
            lg={{ start: 2, end: 4 }}
            md={{ start: 2, end: 4 }}
            sm={{ start: 2, end: 4 }}>
            <img
              style={{
                marginTop: '20px',
                marginBottom: '20px',
                borderRadius: '50%',
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image)}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Link href={props.props.link} target="_blank">
            {props.props.name}
          </Link>

          <h6>{props.props.affiliation}</h6>
        </div>
      </Tile>
    </Column>
  );
};

export { Instructor, Reference };
