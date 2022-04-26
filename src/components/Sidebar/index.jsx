import React from 'react';
/** React Bootstrap */
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const Sidebar = () => {
    return (
        <div className='mx-2'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="section10">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="section10">Section 10</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section11">Section 11</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section12">Section 12</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section13">Section 13</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section14">Section 14</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section15">Section 15</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section16">Section 16</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section17">Section 17</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section18">Section 18</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="section19">Section 19</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="section10">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 10 React Introduction</b></h3>
                                    <img className='image' src={require('../../assets/images/section10.png')} alt="section10" />
                                    <h4 className='mt-3'>Resume Section 10 React Introduction React JS</h4>
                                    <a href="https://github.com/mumtazdedi/10_React-Introduction.git"> Link Repository Tugas Praktikum </a>
                                    <br />
                                    <p>Dari materi yang ada pada section React Introduction ini, dapat disimpulkan bahwa :</p>
                                    <p>1. React adalah suatu library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile.</p>
                                    <p>2. Alasan kenapa menggunakan react daripada library Javascript lain adalah :</p>
                                    <ul>
                                        <li>Deklaratif</li>
                                        <li>Berbasis komponen</li>
                                        <li>Dapat digunakan untuk membangun aplikasi website maupun mobile</li>
                                    </ul>
                                    <p>3. Dom manipulation merupakan kunci jika kita ingin membuat suatu website yang interaktif.</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section11">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 11 React Fundamental</b></h3>
                                    <img className='image' src={require('../../assets/images/section11.png')} alt="section11" />
                                    <h4>Resume Section 11 Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/11_react_fundamental.git"> Link Repository Tugas Praktikum </a>
                                    <br />
                                    <p>Dari materi yang telah disampaikan pada section 11, dapat disimpulkan bahwa :</p>
                                    <p>1. JSX adalah singkatan dari javascript xml. Yang mana dengan menggunakan jsx ini, programmer
                                        akan lebih mudah membuat user interface karena tampilannya hampir sama dengan html.</p>
                                    <p>2. Dalam react, kita membagi suatu tampilan website (UI) menjadi komponen-komponen. Yang mana
                                        komponen sendiri adalah bagian kode yang dapat digunakan kembali yang digunakan untuk
                                        menentukan tampilan, behavior, dan state. </p>
                                    <p>3. Dalam React lifecycle, terdapat 3 tahap. Yakni mounting, updating, serta unmounting.</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section12">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 12 React Routing</b></h3>
                                    <img className='image' src={require('../../assets/images/section12.png')} alt="section12" />
                                    <h4>Resume Section 12 React Routing Alterr React JS</h4>
                                    <a href="https://github.com/mumtazdedi/12_react_routing.git"> Link Repository Tugas Praktikum </a>
                                    <br />
                                    <p>Dari materi yang telah disampaikan pada section 12, dapat disimpulkan bahwa :</p>
                                    <p>1. React router merupakan modul dalam react yang berfungsi untuk melakukan proses
                                        navigasi pada SPA (Single Page Application).</p>
                                    <p>2. Pada react, kita dapat menggunakan link navigasi bukan dengan tag <a href=""></a>,
                                        akan tetapi kita menggunakan tag Link to="". Namun, jika dilakukan inspect
                                        elemen pada browser akan muncul menjadi a href="" </p>
                                    <p>3. Ada beberapa hook dalam react routing, diantaranya yaitu :</p>
                                    <p>pada react-router-dom versi 5 :</p>
                                    <ul>
                                        <li>useHistory</li>
                                        <li>useLocation</li>
                                        <li>useParams</li>
                                        <li>useRouteMatch</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section13">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 13 Event Handling</b></h3>
                                    <img className='image' src={require('../../assets/images/section13.png')} alt="section13" />
                                    <h4>Resume Section 13 Event Handling Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/13_event_handling_class.git"> Link Repository Tugas Praktikum </a>
                                    <br />
                                    <p>Dari materi yang telah diberikan pada section 13, dapat disimpulkan bahwa :</p>
                                    <p>1. state adalah data private sebuah component. Data ini hanya tersedia untuk
                                        component tersebut dan tidak bisa diakses dari component lain</p>
                                    <p>2. ada 2 macam komponen dalam react, yaitu :</p>
                                    <ul>
                                        <li>Stateless</li>
                                        <li>Stateful</li>
                                    </ul>
                                    <p>3. Handling Event  adalah suatu metode untuk menangani sebuah event / aksi
                                        yang diberikan pengguna kepada suatu komponen.</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section14">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 14 React Hooks</b></h3>
                                    <img className='image' src={require('../../assets/images/section14.png')} alt="section14" />
                                    <h4>Resume Section 14 React Hooks Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/14_react_hook.git">Link Repository Tugas Praktikum</a>
                                    <br />
                                    <p>Dari materi yang telah diberikan pada section 14, dapat disimpulkan bahwa :</p>
                                    <p>1. Hooks merupakan fitur baru yang diberikan pada saat update react 16.8 yang mana
                                        dengan hooks ini kita dapat menggunakan state dan fitur react lain tanpa perlu
                                        menggunakan class component</p>
                                    <p>2. React hooks dibuat dengan alasan :</p>
                                    <ul>
                                        <li>Kesulitan yang muncul ketika menggunakan kembali stateful logic antar komponen</li>
                                        <li>Komponen yang kompleks menjadi sulit untuk dimengerti</li>
                                        <li>class komponen terlalu membingungkan manusia dan mesin apalagi ketika digunakan
                                            dalam suatu proyek besar</li>
                                    </ul>
                                    <p>3. Ada beberapa hooks yang ada pada react. diantaranya:</p>
                                    <ul>
                                        <li>useState</li>
                                        <li>useEffect</li>
                                        <li>useContext</li>
                                        <li>useReducer</li>
                                        <li>useRef</li>
                                        <li>useCallback</li>
                                        <li>useMemo</li>
                                    </ul>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section15">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 15 React Form</b></h3>
                                    <img className='image' src={require('../../assets/images/section15.png')} alt="section15" /> <br />
                                    <h4 className='mt-3'>Resume Section 15 React Form Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/15_react_form.git">Link Repository Tugas Praktikum</a>
                                    <br />
                                    <p>
                                        Dari materi yang telah disampaikan pada section 15, dapat disimpulkan bahwa : <br />
                                        1. Form merupakan salah satu komponen penting dalam website. Form digunakan untuk
                                        menghandle inputan dari user untuk diproses selanjutnya. <br />
                                        2. Type elemen input form bermacam-macam, diantaranya : <br />
                                        <ul>
                                            <li>Text</li>
                                            <li>Radio</li>
                                            <li>Email</li>
                                            <li>checkbox</li>
                                            <li>File</li>
                                            <li>Password</li>
                                        </ul>
                                        3. Ada beberapa tipe validasi data dalam form : <br />
                                        <ul>
                                            <li>Client-side validation</li>
                                            <li>Server-side validation</li>
                                        </ul>
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section16">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 16 Global State Management and Data fetching</b></h3>
                                    <img className='image' src={require('../../assets/images/section16.png')} alt="section16" /> <br />
                                    <h4 className='mt-3'>Resume Section 16 Global State Management and Data fetching Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/16_global_state_management_and_data_fetching.git">Link Repository Tugas Praktikum</a>
                                    <br />
                                    <p>
                                        Dari materi yang telah disampaikan, dapat disimpulkan bahwa : <br />
                                        1. Redux adalah salah satu package yang ada dalam react yang kegunaannya adalah
                                        untuk memanajemen state secara global (satu state dalam redux dapat diakses
                                        di komponen manapun) <br />
                                        2. Ada 3 komponen penting dalam redux, yaitu : <br />
                                        <ul>
                                            <li>Actions</li>
                                            <li>Reducer</li>
                                            <li>Store</li>
                                        </ul>
                                        3. Ada beberapa cara untuk melakukan fetching data di react, yaitu : <br />
                                        <ul>
                                            <li>Fetch API</li>
                                            <li>Axios</li>
                                            <li>React Query Library</li>
                                        </ul>
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section17">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 17 Testing</b></h3>
                                    <img className='image' src={require('../../assets/images/section17.png')} alt="section17" /> <br />
                                    <h4 className='mt-3'>Resume Section 17 Testing Alterra React JS</h4>
                                    <a href="https://github.com/mumtazdedi/17_testing.git">Link Repository Tugas Praktikum</a>
                                    <br />
                                    <p>
                                        Dari materi yang telah disampaikan, dapat disimpulkan bahwa : <br />
                                        1. Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa
                                        kode kita tetap benar sepanjang masa aplikasi. Test assertion akan mengembalikan nilai true
                                        kecuali ada bug di kode kita. <br />
                                        2. Kategori testing pada React dibagi menjadi dua, yaitu : <br />
                                        <ul>
                                            <li>Rendering component trees</li>
                                            <li>Menjalankan aplikasi lengkap</li>
                                        </ul>
                                        3. Library yang digunakan untuk melakukan testing pada React adalah jest serta react
                                        testing library yang secara default akan terinstall ketika kita menginstall
                                        aplikasi react
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section18">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 18 Deployment</b></h3>
                                    <img className='image' src={require('../../assets/images/section18.png')} alt="section18" /> <br />
                                    <h4 className='mt-3'>Resume Section 18 Deployment Alterra React JS</h4>
                                    <a href="https://taskdeploy-dedimumtazulumam.netlify.app/">Link Deployment Tugas Praktikum</a> <br />
                                    <a href="https://github.com/mumtazdedi/16_global_state_management_and_data_fetching.git">Link Repository Tugas Praktikum</a>
                                    <br />
                                    <p>
                                        Dari materi yang telah disampaikan, dapat disimpulkan bahwa : <br />
                                        1. Deployment adalah suatu kegiatan yang bertujuan untuk mempublish aplikasi
                                        yang sudah kita buat agar dapat diakses oleh banyak orang. <br />
                                        2. Sebelum melakukan deployment, kita harus melakukan build pada aplikasi
                                        yang telah kita buat menggunakan command `npm run build` agar aplikasi
                                        yang dideploy nanti menjadi versi production yang performanya ringan dan cepat <br />
                                        3. Ada beberapa website yang dapat digunakan untuk deploy aplikasi secara gratis
                                        , diantaranya yaitu : <br />
                                        <ul>
                                            <li>Netlify</li>
                                            <li>Surge</li>
                                            <li>Vercel</li>
                                            <li>Heroku</li>
                                        </ul>
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section19">
                                <div className='text-start border rounded-1 p-3'>
                                    <h3><b>Section 19 Introduction Algorithm</b></h3>
                                    <img className='image' src={require('../../assets/images/section19_1.png')} alt="section19-1" />
                                    <img className='image' src={require('../../assets/images/section19_2.png')} alt="section19-2" /> <br />
                                    <h4 className='mt-3'>Resume Section 19 Introduction Algorithm Alterra React JS</h4>
                                    <br />
                                    <p>
                                        Dari materi yang telah disampaikan, dapat disimpulkan bahwa : <br />
                                        1. Algoritma adalah suatu prosedur komputasi yang didefinisikan dengan
                                        baik yang mengambil beberapa nilai sebagai input dan menghasilkan beberapa
                                        nilai sebagai output. <br />
                                        2. Karakterisitik algoritma, yaitu : <br />
                                        <ul>
                                            <li>Memiliki batas (awal dan akhir)</li>
                                            <li>Instruksi terdefinisi dengan baik</li>
                                            <li>Efektif dan efisien</li>
                                        </ul>
                                        3. Flowchart adalah suatu bagan dengan simbol tertentu yang menggambarkan
                                        urutan dan hubungan antar proses secara mendetail. <br />
                                        Ada beberapa simbol yang digunakan dalam flowchart, yaitu : <br />
                                        <ul>
                                            <li>Mulai/Selesai </li>
                                            <li>Proses</li>
                                            <li>Input/Output</li>
                                            <li>Pengkondisian</li>
                                            <li>Looping</li>
                                        </ul>
                                    </p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Sidebar;
