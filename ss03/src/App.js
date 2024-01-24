import './App.css';
import StudentsInfo from './components/Students';

const student = [
    {id: 1, sName: 'Duy', age: 20, address: '280 Trần Hưng Đạo, Đà Nẵng'},
    {id: 1, sName: 'Hoang', age: 20, address: 'Buyanovsky Perelok 3A'},
    {id: 1, sName: 'Hiep', age: 20, address: 'Đấu trường công lý'},
    {id: 1, sName: 'Hung', age: 20, address: 'Verdansky 11/29B'},
    {id: 1, sName: 'Huy', age: 20, address: '11 Lê Mạnh Trinh, Đà Nẵng'},
    {id: 1, sName: 'Hop', age: 20, address: '11 Điện Biên Phủ, Hải Phòng'},
    {id: 1, sName: 'Hai', age: 20, address: 'Tầng 2 Codegym Đà Nẵng'},
    {id: 1, sName: 'Han', age: 20, address: '49 Hồ Nghinh, Đà Nẵng'}
]

function App() {
return(
    <div classsName="table-responsive">
        <table classsName="table table-primary">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">sName</th>
                    <th scope="col">AGE</th>
                    <th scope="col">ADDRESS</th>
                </tr>
            </thead>
            <tbody>
                {student.map((std) => (
                    <StudentsInfo id={std.id} sName={std.sName} age={std.age} address={std.address}/>
                ))}
            </tbody>
        </table>
    </div>
);
}
export default App;
