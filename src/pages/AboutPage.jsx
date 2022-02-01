import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a project or service</p>

      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
