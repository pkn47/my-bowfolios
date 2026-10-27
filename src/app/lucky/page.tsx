/* eslint-disable import/extensions */
import { Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { PageIDs } from '@/utilities/ids';
import pageStyle from '@/utilities/pageStyle';
import ProfileCardHelper from './ProfileCardHelper';

// Re-run on every request so a new random profile is picked each click
export const dynamic = 'force-dynamic';

const LuckyPage = async () => {
  const profiles = await prisma.profile.findMany();
  const item = profiles[Math.floor(Math.random() * profiles.length)];

  return (
    <Container id={PageIDs.landingPage} style={pageStyle}>
      <Row xs={1} md={2} lg={4} className="g-2 justify-content-center">
        {item && <ProfileCardHelper key={item.id} profile={item} />}
      </Row>
    </Container>
  );
};

export default LuckyPage;