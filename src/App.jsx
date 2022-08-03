import GlobalStyle from './styles/GlobalStyle';
import { Layouts } from './styles/Common';
import PageHeader from './components/PageHeader';
import PortfolioHero from './components/PortfolioHero';
import PortfolioPartner from './components/PortfolioPartner';

function App() {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <PageHeader type={2} />
                <PortfolioHero />
                <PortfolioPartner />
            </Layouts>
        </>
    );
}

export default App;