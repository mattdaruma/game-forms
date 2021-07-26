/* GENERATED WITH @graphql-codegen/cli */
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type AdminRole = {
  __typename?: 'AdminRole';
  adminRoleId: Scalars['ID'];
  role: Scalars['String'];
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type FieldTemplate = {
  __typename?: 'FieldTemplate';
  fieldTemplateId: Scalars['ID'];
  name: Scalars['String'];
  label: Scalars['String'];
  type: FieldType;
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  hint?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  requiredTrue?: Maybe<Scalars['Boolean']>;
  max?: Maybe<Scalars['Int']>;
  maxLength?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  minLength?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Scalars['String']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export enum FieldType {
  Color = 'COLOR',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Email = 'EMAIL',
  Month = 'MONTH',
  Number = 'NUMBER',
  Password = 'PASSWORD',
  Tel = 'TEL',
  Text = 'TEXT',
  Time = 'TIME',
  Url = 'URL',
  Week = 'WEEK',
  Textarea = 'TEXTAREA',
  Keyvalueselect = 'KEYVALUESELECT'
}

export type FormTemplate = {
  __typename?: 'FormTemplate';
  formTemplateId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  fieldIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutation?: Maybe<Scalars['String']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<Scalars['String']>;
};


export type MutationCreateFormArgs = {
  queueId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  mutation?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  AmAdmin?: Maybe<Scalars['Boolean']>;
  AmQueueWorker?: Maybe<Scalars['Boolean']>;
  AmQueueManager?: Maybe<Scalars['Boolean']>;
  MyUser?: Maybe<User>;
  AdminRole?: Maybe<AdminRole>;
  AdminRoles?: Maybe<Array<Maybe<AdminRole>>>;
  FieldTemplate?: Maybe<FieldTemplate>;
  FieldTemplates?: Maybe<Array<Maybe<FieldTemplate>>>;
  FieldTemplatesInFormTemplate?: Maybe<Array<Maybe<FieldTemplate>>>;
  FormTemplate?: Maybe<FormTemplate>;
  FormTemplates?: Maybe<Array<Maybe<FormTemplate>>>;
  Queue?: Maybe<Queue>;
  Queues?: Maybe<Array<Maybe<Queue>>>;
  User?: Maybe<User>;
  Users?: Maybe<User>;
  Work?: Maybe<Work>;
  Works?: Maybe<Array<Maybe<Work>>>;
  WorkDataList?: Maybe<Array<Maybe<WorkDataList>>>;
  WorkDataLists?: Maybe<Array<Maybe<WorkDataList>>>;
  WorkDataValue?: Maybe<WorkDataValue>;
  WorkDataValues?: Maybe<Array<Maybe<WorkDataValue>>>;
};


export type QueryAmQueueWorkerArgs = {
  queueId: Scalars['ID'];
};


export type QueryAmQueueManagerArgs = {
  queueId: Scalars['ID'];
};


export type QueryAdminRoleArgs = {
  adminRoleId: Scalars['ID'];
};


export type QueryFieldTemplateArgs = {
  fieldTemplateId: Scalars['String'];
};


export type QueryFieldTemplatesInFormTemplateArgs = {
  formTemplateId: Scalars['ID'];
};


export type QueryFormTemplateArgs = {
  formTemplateId: Scalars['String'];
};


export type QueryQueueArgs = {
  queueId: Scalars['ID'];
};


export type QueryQueuesArgs = {
  workManage?: Maybe<WorkManage>;
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryWorkArgs = {
  workId: Scalars['ID'];
};


export type QueryWorksArgs = {
  queueId?: Maybe<Scalars['ID']>;
};


export type QueryWorkDataListArgs = {
  workId: Scalars['ID'];
  fieldTemplateId: Scalars['ID'];
};


export type QueryWorkDataListsArgs = {
  workId: Scalars['ID'];
};


export type QueryWorkDataValueArgs = {
  workId: Scalars['ID'];
  fieldTemplateId: Scalars['ID'];
};


export type QueryWorkDataValuesArgs = {
  workId: Scalars['ID'];
};

export type Queue = {
  __typename?: 'Queue';
  queueId: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export enum Role {
  Customerdataaccess = 'CUSTOMERDATAACCESS',
  Employeedataaccess = 'EMPLOYEEDATAACCESS'
}

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded?: Maybe<Scalars['String']>;
};


export type SubscriptionCommentAddedArgs = {
  repoFullName: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  identity: Scalars['String'];
  display: Scalars['String'];
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export type Work = {
  __typename?: 'Work';
  workId: Scalars['ID'];
  formTemplateId: Scalars['ID'];
  complete?: Maybe<Scalars['Boolean']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export type WorkDataList = {
  __typename?: 'WorkDataList';
  workDataListId: Scalars['ID'];
  workId: Scalars['ID'];
  fieldTemplateId: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export type WorkDataValue = {
  __typename?: 'WorkDataValue';
  id: Scalars['ID'];
  workId: Scalars['ID'];
  fieldTemplateId: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  createdDate: Scalars['Int'];
  createdByUserId?: Maybe<Scalars['ID']>;
  archive?: Maybe<Scalars['Boolean']>;
  archiveDate?: Maybe<Scalars['Int']>;
  archiveByUserId?: Maybe<Scalars['ID']>;
};

export enum WorkManage {
  Work = 'WORK',
  Manage = 'MANAGE'
}

export type ToolbarUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ToolbarUserQuery = (
  { __typename?: 'Query' }
  & { MyUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'createdDate' | 'display'>
  )> }
);

export type MyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type MyUserQuery = (
  { __typename?: 'Query' }
  & { MyUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'createdDate' | 'display'>
  )> }
);

export const ToolbarUserDocument = gql`
    query ToolbarUser {
  MyUser {
    userId
    createdDate
    display
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToolbarUserGQL extends Apollo.Query<ToolbarUserQuery, ToolbarUserQueryVariables> {
    document = ToolbarUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyUserDocument = gql`
    query MyUser {
  MyUser {
    userId
    createdDate
    display
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MyUserGQL extends Apollo.Query<MyUserQuery, MyUserQueryVariables> {
    document = MyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }