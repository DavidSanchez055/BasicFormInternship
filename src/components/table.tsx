import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeInfo } from '../Slices.ts';
import { RootState } from '../Store.ts';
import '../styles/Table.css';

const Table: React.FC = () => {
    const info = useSelector((state: RootState) => state.info.info);
    const dispatch = useDispatch();

    return (
        <div className="table-container">
            <h1>Información Registrada</h1>
            <table>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.career}</td>
                            <td>
                                <button onClick={() => dispatch(removeInfo(item.id))}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
