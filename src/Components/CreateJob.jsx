import React from 'react'
import Button from './Common/Button'
import Dropwdown from './Common/Dropdown'
import FormDescription from './Common/FormDescription'
import FormInput from './Common/FormInput'
import FormMultiOption from './Common/FormMultiOption'
import FormNumber from './Common/FormNumber'
import PhoneInput from './Common/PhoneInput'
import Footer from './Footer'
import Header from './Header'

const CreateJob = () => {
    return (
        <>
            <Header />
            <div className='container py-[2rem]'>
                <div className='text-center flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'>Create Job Post</h1>
                    <p className='text-[#7B7B7B] text-sm'>
                        Lorem Ipsum is simply dummy text of the printing
                        <br className='hidden md:block' />
                        and typesetting industry.
                    </p>
                </div>
                <div className='my-[2rem] flex flex-col gap-8 w-[70%] mx-auto'>
                    <FormInput title='Job Title' placeholder='Type Job title to post' />
                    <FormMultiOption title={'Job Type'} data={['On-site', 'Remote', 'Hybrid']} />
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <Dropwdown placeholder={'Select Country'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Country'} showTitle />
                        <Dropwdown placeholder={'Select City'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Country'} showTitle />
                    </div>
                    <FormMultiOption title={'Salary Period'} data={['Hourly', 'Weekly', 'Monthly', 'Yearly']} />
                    <FormNumber title='Salary From' options={[
                        { value: '1', label: 'USD' },
                        { value: '11', label: 'RS' },
                        { value: '2', label: 'AUD' },
                        { value: '3', label: 'CAD' },
                        { value: '4', label: 'AED' },
                    ]} placeholder='Enter Price' />
                    <FormNumber title='Position Type' options={[
                        { value: '1', label: 'USD' },
                        { value: '11', label: 'RS' },
                        { value: '2', label: 'AUD' },
                        { value: '3', label: 'CAD' },
                        { value: '4', label: 'AED' },
                    ]} placeholder='Enter Price' />
                    <FormMultiOption title={'Salary Period'} data={['Contract', 'Full-time', 'Part-time']} />
                    <FormDescription title='Job Description' />
                    <Dropwdown placeholder={'Select Job Category'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Job category'} showTitle />
                    <Dropwdown isMulti placeholder={'Select Skills'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Skills'} showTitle />
                    <Dropwdown placeholder={'Select Experience'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Required Experience'} showTitle />
                    <Button className='py-3 rounded-lg font-semibold' text='Create Job' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateJob