import GlobalStyle from './styles/GlobalStyle';
import { Layouts } from './styles/Common';
import { Link } from 'react-router-dom';

function App({ title }) {
    return (
        <>
            <GlobalStyle />
            <Layouts>
                <ul style={{ margin: '20px', fontSize: '16px' }}>
                    <li style={{ marginBottom: '5px' }}><Link to="/chat/pay">1. 커피챗 결제</Link></li>
                    <li style={{ marginBottom: '5px' }}><Link to="/card/view">2. 나의 간편 결제 카드</Link></li>
                    <li style={{ marginBottom: '5px' }}><Link to="/card/register">3. 카드 등록</Link></li>
                    <li style={{ marginBottom: '5px' }}><Link to="/card/change">4. 등록 카드 변경</Link></li>
                </ul>
                {title}
            </Layouts>
        </>
    );
}

export default App;