import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    chooseName, 
    chooseDescription, 
    chooseSuperPower, 
    chooseComicsAppearedIn, 
    chooseImageUrl

} from '../../redux/slices/rootSlice';
import { Button } from '@mui/material';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MarvelFormProps {
    id?: string;
    data?: {}
}

interface MarvelState {
    name: string;
    description: string;
    super_power: string;
    comics_appeared_in: number;
    image_url: string;
}

export const MarvelForm = (props: MarvelFormProps) => {

    const dispatch = useDispatch();
    let { marvelData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<MarvelState>(state => state.name)
    console.log(name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)

        if (props.id!) {
            console.log("Inside if")
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            // event.target.closest('form').reset();
            window.location.reload()
            event.target.reset()
            
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseSuperPower(data.super_power))
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
            dispatch(chooseImageUrl(data.image_url))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description" />
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power" />
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In" />
                </div>
                <div>
                    <label htmlFor="image_url">Image URL</label>
                    <Input {...register('image_url')} name="image_url" placeholder="Image URL" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
