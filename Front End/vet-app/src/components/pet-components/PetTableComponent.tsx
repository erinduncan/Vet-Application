import React, { useState, useEffect } from "react";
import { getClients } from "../../utilites/api";
import { Table } from "reactstrap";
import IPet from "../../models/IPet";
import { PetTableDisplay } from "./PetTableDisplay";

export const PetTableComponent: React.FC<any> = (props:any) => {
    const[petList, setPetList] = useState([]);
    useEffect(() => {
        getClients().then(r => setPetList(r.data));
    },[petList.length]);

    return (
        <div className="petTable">
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Species</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Owner</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {petList.map((r: IPet) => (
                    <PetTableDisplay pet={r} />
                ))}
                </tbody>
            </Table>
        </div>
    )
}