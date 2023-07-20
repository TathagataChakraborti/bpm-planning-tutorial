import React from 'react';
import { ReferenceList } from './data/References';
import { Reference, Instructor } from '../../components/Info';
import {
  Grid,
  Column,
  ToastNotification,
  StructuredListWrapper,
  StructuredListBody,
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
  Button,
  Link,
} from '@carbon/react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          paddingTop: '50px',
        }}>
        <Grid>
          <Column lg={8} md={8} sm={4}>
            <a
              href="https://bpm2021.diag.uniroma1.it/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue sub-title"
              style={{ textDecoration: 'none' }}>
              BPM 2021 Tutorial on
            </a>
            <h1 className="title">
              Automated Planning and Business Process Management
            </h1>

            <br />
            <br />
            <br />
            <br />

            <h4>Tutorial Syllabus</h4>
            <hr />

            <Link className="read-more" target="_blank">
              <Button
                kind="primary"
                size="sm"
                href="https://bpm-planning-tutorial.mybluemix.net/shared/bpm-2021-slides.pdf"
                target="_blank">
                PPTX
              </Button>
            </Link>

            <Link
              className="read-more"
              href="http://editor.planning.domains/#read_session=3RHJRH6Ey6"
              target="_blank">
              <Button kind="secondary" size="sm">
                PDDL
              </Button>
            </Link>

            <br />
            <br />

            <Accordion align="start">
              <AccordionItem
                title={<strong>Introduction | 20 min</strong>}
                open>
                <UnorderedList>
                  <ListItem>
                    Tutorial Overview:{' '}
                    <em>New trends in Business Process Management</em> | 5 min
                  </ListItem>
                  <ListItem>Basics of Automated Planning | 15 min</ListItem>
                </UnorderedList>
              </AccordionItem>

              <AccordionItem
                title={<strong>Declarative Modeling | 20 min</strong>}
                open>
                <UnorderedList>
                  <ListItem>Scale-up and Reuse</ListItem>
                  <ListItem>
                    Case Studies: Non-deterministic planning as a design tool
                    <UnorderedList nested>
                      <ListItem>
                        Authoring of conversational agents with underlying
                        business processes
                      </ListItem>
                      <ListItem>
                        Web service composision meets process authoring
                      </ListItem>
                    </UnorderedList>
                    <Link
                      className="read-more"
                      href="https://arxiv.org/abs/1910.08137"
                      target="_blank">
                      <Button kind="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                    <Link
                      className="read-more"
                      href="https://link.springer.com/chapter/10.1007/978-3-030-66498-5_14"
                      target="_blank">
                      <Button kind="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                    <Link
                      className="read-more"
                      href="https://www.degruyter.com/document/doi/10.1515/9783110676693-008/html"
                      target="_blank">
                      <Button kind="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                    <Link
                      className="read-more"
                      href="https://arxiv.org/abs/2001.03543"
                      target="_blank">
                      <Button kind="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </AccordionItem>

              <AccordionItem
                title={<strong>Trace Alignment | 20 min</strong>}
                open>
                <UnorderedList>
                  <ListItem>
                    Solving the trace alignment problem using{' '}
                    <em>
                      LTL<sub>f</sub>
                    </em>{' '}
                    constraints.
                  </ListItem>
                </UnorderedList>

                <Link
                  className="read-more"
                  href="https://ojs.aaai.org/index.php/ICAPS/article/view/13783"
                  target="_blank">
                  <Button kind="ghost" size="sm">
                    Read More
                  </Button>
                </Link>

                <Link
                  className="read-more"
                  href="https://ojs.aaai.org/index.php/ICAPS/article/view/13911"
                  target="_blank">
                  <Button kind="ghost" size="sm">
                    Read More
                  </Button>
                </Link>

                <Link
                  className="read-more"
                  href="https://ojs.aaai.org/index.php/AAAI/article/view/11020"
                  target="_blank">
                  <Button kind="ghost" size="sm">
                    Read More
                  </Button>
                </Link>
              </AccordionItem>

              <AccordionItem
                title={<strong>Interpretability | 20 min</strong>}
                open>
                <UnorderedList>
                  <ListItem>
                    Explainability for the domain author:{' '}
                    <em>domain abstractions</em>. | 10 min
                  </ListItem>
                  <ListItem>
                    Transparency for the end-user:{' '}
                    <em>causal links and landmarks</em>. | 10 min
                  </ListItem>
                </UnorderedList>

                <Link
                  className="read-more"
                  href="https://ojs.aaai.org/index.php/ICAPS/article/view/6744"
                  target="_blank">
                  <Button kind="ghost" size="sm">
                    Read More
                  </Button>
                </Link>

                <Link
                  className="read-more"
                  href="https://arxiv.org/abs/2011.10707"
                  target="_blank">
                  <Button kind="ghost" size="sm">
                    Read More
                  </Button>
                </Link>
              </AccordionItem>

              <AccordionItem title={<strong>Discussion | 10 min</strong>} open>
                <UnorderedList>
                  <ListItem>Tools for the planning researcher | 5 min</ListItem>
                  <ListItem>Conclusion | 5 min</ListItem>

                  <Link
                    className="read-more"
                    href="https://icaps21.icaps-conference.org/demos/"
                    target="_blank">
                    <Button kind="ghost" size="sm">
                      Quicklinks
                    </Button>
                  </Link>
                </UnorderedList>
              </AccordionItem>
            </Accordion>

            <br />
            <br />
            <br />
            <br />

            <h4>References</h4>
            <br />

            <StructuredListWrapper>
              <StructuredListBody>
                {ReferenceList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Reference props={item} />
                  </React.Fragment>
                ))}
              </StructuredListBody>
            </StructuredListWrapper>

            <br />
            <br />
            <br />
            <br />
          </Column>
          <Column lg={8} md={8} sm={4}>
            <div className="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_q_ied5Xskk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>

            <br />
            <br />
            <br />
            <br />

            <Grid>
              <Instructor
                props={{
                  image: 'andrea',
                  name: 'Andrea Marrella',
                  affiliation: 'Sapienza Università di Roma',
                  link:
                    'http://www.diag.uniroma1.it/~marrella/publications.html',
                }}
              />
              <Instructor
                props={{
                  image: 'tathagata',
                  name: 'Tathagata Chakraborti',
                  affiliation: 'IBM Research',
                  link: 'http://tchakra2.com',
                }}
              />
            </Grid>

            <br />
            <br />

            <div style={{ marginLeft: '10px' }}>
              <ToastNotification
                kind="info"
                lowContrast
                hideCloseButton
                subtitle={
                  <span>
                    We recently hosted the first AI4BPM Bridge at AAAI 2023.
                    Check it out!
                  </span>
                }
                timeout={0}
                title="AI4BPM @ AAAI 2023"
              />
              <br />
              <Button size="sm" href="https://ai4bpm.com" target="_blank">
                AI4BPM
              </Button>
            </div>
          </Column>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LandingPage;
