/// <reference types="cypress-downloadfile"/>

describe('Download File', function (){
    it('Download file test', function(){
	cy.downloadFile('http://codenboxautomationlab.com/wp-content/uploads/2023/02/DemoData.csv', 'MyDownloads','testData.csv')
	})
})
