import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Forms from '../components/Forms';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Forms />
  </Layout>
);

export default IndexPage;
