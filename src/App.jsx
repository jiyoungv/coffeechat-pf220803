import PageLayout from './components/PageLayout';
import PageHeader from './components/PageHeader';
import PortfolioHero from './components/PortfolioHero';
import PortfolioPartner from './components/PortfolioPartner';

function App() {
    return (
        <PageLayout>
            <PageHeader />
            <PortfolioHero />
            <PortfolioPartner />
        </PageLayout>
    );
}

export default App;