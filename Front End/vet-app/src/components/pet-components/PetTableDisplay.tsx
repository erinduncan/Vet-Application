import React from 'react';
import IPet from '../../models/IPet';

export interface IP {
    pet: IPet
}

export const PetTableDisplay: React.FC<IP> = (props:IP) => {
    return(
        <>
            <tr>
                <td key={0}>{props.pet.id}</td>
                <td key={1}>{props.pet.species}</td>
                <td key={2}>{props.pet.name}</td>
                <td key={3}>{props.pet.age}</td>
                <td key={4}>{props.pet.owner}</td>
                <td key={5}>{props.pet.description}</td>
            </tr>
        </>
    );
};