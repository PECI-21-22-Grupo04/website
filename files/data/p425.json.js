window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p425","name":"spSelectClientInstructorHistory","subtype":"PROCEDURE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Selects all the Instructors that have been associated with a certain Client</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"spSelectClientInstructorHistory"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\n\tIF ((SELECT COUNT(*) FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INclientEmail) <> 1) THEN\r\n\t\tCALL spRaiseError();\r\n    ELSE\r\n\t\tSELECT userID INTO @uID FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INclientEmail;\t\r\n\t\tSELECT \tmail,\r\n\t\t\t\tfirstName,\r\n\t\t\t\tlastName,\r\n\t\t\t\tCAST(signedDate AS CHAR) AS signedDate,\r\n\t\t\t\tcanceledDate,\r\n\t\t\t\trating,\r\n\t\t\t\treview,\r\n                imagePath\r\n\t\tFROM (SELECT \tCONVERT(AES_DECRYPT(email, dbKey) USING UTF8MB4) AS mail,\r\n\t\t\t\t\t\tCONVERT(AES_DECRYPT(firstName, dbKey) USING UTF8MB4) AS firstName,\r\n\t\t\t\t\t\tCONVERT(AES_DECRYPT(lastName, dbKey) USING UTF8MB4) AS lastName,\r\n\t\t\t\t\t\tDATE(signedDate) AS signedDate,\r\n\t\t\t\t\t\tDATE(canceledDate) AS canceledDate,\r\n\t\t\t\t\t\taffClientID,\r\n\t\t\t\t\t\taffInstID,\r\n                        imagePath\r\n\t\t\t\tFROM PECI_PROJ.SysUser \r\n\t\t\t\tINNER JOIN (SELECT *\r\n\t\t\t\t\t\t\tFROM PECI_PROJ.Affiliation INNER JOIN PECI_PROJ.AffiliationLog ON PECI_PROJ.Affiliation.affiliationID = PECI_PROJ.AffiliationLog.affID\r\n\t\t\t\t\t\t\tWHERE affClientID = @uID) AS res ON PECI_PROJ.SysUser.userID = res.affInstID) AS res2 \r\n\t\t\t\tLEFT JOIN PECI_PROJ.ReviewLog ON (PECI_PROJ.ReviewLog.revClientID = res2.affClientID AND PECI_PROJ.ReviewLog.revInstID = res2.affInstID)\r\n\t\t\t\tORDER BY canceledDate ASC;\r\n\tEND IF;\r\nEND","parameters":[{"name":"INclientEmail","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"dbKey","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-06-25 21:36"};