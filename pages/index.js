import Head from 'next/head'
import { connect } from 'react-redux';
import ProjectListFilter from '../components/compound/ProjectListFilter';
import Footer from '../components/Footer';
import Header from '../components/Header'
import backendApi from '../lib/backendApi'
import styles from '../styles/sass/Home.module.scss'

const Home = props => {
  const {projects, setCategoryFilter, filterCategoryId} = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Dribble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.aboveTheFold} >
          <div className={styles.leftSection}>
            <h1>Discover the world’s top designers &amp; creatives</h1>
            <p>
              Dribbble is the leading destination to find & showcase creative 
              work and home to the world's best design professionals.
            </p>
            <button className={styles.accent}>
              Sign up
            </button>
          </div>
          <div className={styles.rightSection}>
            <img src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-db195db2c89f7f239f555901e8578e08987c000329287238e961b378a62a15e5.png" />
          </div>
        </div>
        <ProjectListFilter 
          projects={projects} 
          filterCategoryId={filterCategoryId}
          setCategoryFilter={setCategoryFilter}
           />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: await backendApi.getProjects(),
    }
  }
}

const mapStateToProps = (state) => ({
  filterCategoryId: state.search.categoryId,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (filter) => dispatch(setSearchCategoryFilter(filter)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
