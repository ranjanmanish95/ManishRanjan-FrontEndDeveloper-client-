import {render, fireEvent, screen} from '@testing-library/react';
import React from 'react';
import Contact from './ContactUs';
import '@testing-library/jest-dom/extend-expect';

describe('login',()=>{
 
test('contact-form should be in the document',()=>{
   render(<Contact/>);
   const labelNode = screen.getByText("Email");
   expect(labelNode).toBeInTheDocument();
 })

 test('name input should accept text',()=>{
    render(<Contact/>);
    const nameInputNode = screen.getByLabelText("Name");
    expect(nameInputNode.value).toMatch("");
    fireEvent.change(nameInputNode,{target: {value: 'manish ranjan'}})
    expect(nameInputNode.value).toMatch("manish ranjan");
 })

 test('email input should accept text',()=>{
    render(<Contact/>);
    const emailInputNode = screen.getByLabelText("Email");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode,{target: {value: '@testing'}})
    expect(emailInputNode.value).toMatch("@testing");
 })

 test('company input should accept text',()=>{
    render(<Contact/>);
    const companyInputNode = screen.getByLabelText("Company");
    expect(companyInputNode.value).toMatch("");
    fireEvent.change(companyInputNode,{target: {value: 'brainstorm force'}})
    expect(companyInputNode.value).toMatch("brainstorm force");
 })

 test('description input should accept text',()=>{
    render(<Contact/>);
    const descriptionInputNode = screen.getByLabelText("Describe about your proposal");
    expect(descriptionInputNode.value).toMatch("");
    fireEvent.change(descriptionInputNode,{target: {value: 'this is testing'}})
    expect(descriptionInputNode.value).toMatch("this is testing");
 })
})

