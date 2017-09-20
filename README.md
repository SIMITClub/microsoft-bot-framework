# Microsoft Bot Framework

## Setup

### Accounts
- Create azure account for [free](https://azure.microsoft.com/en-in/free/)
- Ensure you are able to login at [qnamaker.ai](https://qnamaker.ai/)
- Ensure you are able to login at [Bot Framework](https://dev.botframework.com/)
- Ensure you have the admin access to the Facebook Page

### Get Credentials
- Microsoft App ID from dev.botframework.com
-- Select the bot
-- Select the settings
-- scroll to app id
-- ensure the secret is only known once!
- QnAmaker credentails
-- 

### Server Files and Folder
- create `credentials.json` file and add the following properties and update it with your setting
```json
{
 	"qna":{
 		"url":"",
 		"subscriptionKey": "",
 		"knowledgeBaseId":""
 	},
 	"microsoftApp":{
 		"id": "",
    "password": ""
 	}
 } 
```

