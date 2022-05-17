# Test Plan

Table of Contents

1. [Introduction](#introduction)
	1. [Scope](#scope)
		1. [In Scope](#in_scope)
		2. [Out of Scope](#out_of_scope)
	2. [Quality Objective](#quality_objective)
	3. [Roles and Responsibilities](#roles_and_responsibilities)
2. [Test Methodology](#test_methodology)
	1. [Overview](#overview)
	2. [Test Levels](#test_levels)
	3. [Bug Triage](#bug_triage)
	4. [Suspension Criteria and Resumption Requirements](#suspension_criteria)
	5. [Test Completeness](#test_completeness)
3. [Test Deliverables](#test_deliverables)
4. [Resource & Environment Needs](#resource_and_environment_needs)
	1. [Testing Tools](#testing_tools)
	2. [Test Environment](#test_environment)

<div id='introduction'/>

# Introduction
The Stitch Todo Test Plan is here to provide the test methodologies undertaken, test deliverables as well as the resources and environments needed.


<div id='scope'/>

## Scope

<div id='in_scope'/>

### In Scope
The features defined in the [business requirements](https://github.com/azaeng04/todo/blob/documentation/BUSINESS_REQUIREMENTS.md) are required to be tested

List of Features
|Module Name|Applicable Roles|Description|
|--|--|--|
|Add Todos|End-User|An end-user can add multiple todo items|
|Update Todos|End-User|An end0user can update one todo item at a time|
|Strikethrough Todos|End-User|An end-user can strikethrough one todo item at a time|
|Delete Todos|End-User|An end-user can delete one todo item at a time|


<div id='out_of_scope'/>

### Out of Scope

Performance, security, database and user experience testing

<div id='quality_objective'/>

## Quality Objective
The quality objective is to prevent any defects around the functionality mentioned [above](#in_scope). Any tests that fail. The developer would be responsible for either resolving the test or resolving the production code. If any new tests need to be included, this will should be evaluated by a QA.

<div id='roles_and_responsibilities'/>

## Roles and Responsibilities
| Member | Tasks |
|--|--|
| Project Manager | Manage the Stitch projects, define project direction and acquire appropriate resources |
| Software Development Engineer in Test | Implement and execute the test cases, test program and test suites. As well provide test reports. |
| Software Development Engineer in Development | Execute and implement best software practices, features, fix defects and write unit tests for existing and resolved defects|
| Test Analyst | Define and refine software test plans, test suites, test cases as well as regression, smoke and sanity testing the software under test. Providing test reports to the project manager to manage, maintain and mitigate potential risks|
| Business Analyst | Define and refine software requirements, supplying test analysts with acceptance criteria for the SDETs to implement test automation |

<div id='test_methodology'/>

# Test Methodology

<div id='overview'/>

## Overview
This is where we define the types of test methodologies that are going to be undertaken

<div id='test_levels'/>

## Test Levels
In the project Stitch Todo, there are 4 types of testing that will be conducted.

 - Unit Testing - testing functions and classes in isolation of any other dependent functions and classes
 - Integration Testing - testing two functions and/or classes together with minimal mocking
 - REST API Testing - testing url endpoints with the relevant data structures from and end to end or integration perspective
 - E2E Testing - testing the entire application/software under test without mocking

<div id='bug_triage'/>

## Bug Triage

The bug triage will be managed in the [defects](https://github.com/azaeng04/todo/blob/documentation/DEFECTS.md) section of the project

<div id='suspension_criteria'/>

## Suspension Criteria and Resumption Requirements
If the team members report that there are 40% of test cases failed, suspend testing until the development team fixes all the failed cases.

<div id='test_completeness'/>

## Test Completeness
This specified the criteria tha denotes a successfully completion of a test phase

- High risk critical areas must pass before any release.
- After critical areas have passed 60%-80% of test cases have to pass, but this will not prevent the release from going out.
- The general mandatory pass rate for the entire application on a day to day basis is 70%-850% else no changes will be accepted into the pipeline until test cases or production code have been resolved

<div id='test_deliverables'/>

# Test Deliverables
  
|Before Testing phase|During Testing Phase|After Testing Phase|
|--|--|--|
|Test Plans, Test Cases and Test Design specifications| Test automation tools, test data, test traceability matrix, error logs and execution logs| Test Results/reports, Defect reports, test procedure guidelines and release notes|

<div id='resource_and_environment_needs'/>

# Resource & Environment Needs

<div id='testing_tools'/>

## Testing Tools

 - Docker
 - Docker compose
 - Cypress

<div id='test_environment'/>

## Test Environment
For automation testing the environment will be completely managed by Docker & Docker Compose. The main OS the application will be running in is a Linux Alpine based distribution with the relevant Node LTS version installed. The application will be brought up using Yarn or NPM package manager.
For manual testing the same would apply, but without the scripts executed against the environment.