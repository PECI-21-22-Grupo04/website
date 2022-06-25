window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p418","name":"spRemoveInstructorAssociation","subtype":"PROCEDURE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Removes a certain Client&#39;s association with his current Instructor</span></p><p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">&nbsp;</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"spRemoveInstructorAssociation"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\n\tIF ((SELECT COUNT(*) FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INclientEmail) <> 1) THEN\r\n\t\tCALL spRaiseError();\r\n    ELSE\r\n\t\tSELECT userID INTO @uID FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INclientEmail;\t\r\n\t\tSELECT \taffiliationID INTO @affID FROM\r\n\t\t(SELECT affiliationID \r\n\t\t\tFROM (SELECT \t*\r\n\t\t\t\tFROM PECI_PROJ.SysUser \r\n\t\t\t\tINNER JOIN (SELECT *\r\n\t\t\t\t\t\t\tFROM PECI_PROJ.Affiliation INNER JOIN PECI_PROJ.AffiliationLog ON PECI_PROJ.Affiliation.affiliationID = PECI_PROJ.AffiliationLog.affID\r\n\t\t\t\t\t\t\tWHERE affClientID = @uID) AS res ON PECI_PROJ.SysUser.userID = res.affInstID) AS res2 \r\n\t\t\t\tLEFT JOIN PECI_PROJ.ReviewLog ON (PECI_PROJ.ReviewLog.revClientID = res2.affClientID AND PECI_PROJ.ReviewLog.revInstID = res2.affInstID)\r\n                WHERE canceledDate IS NULL\r\n\t\t\t\tORDER BY canceledDate ASC\r\n                LIMIT 1 ) AS res4;\r\n\t\tUPDATE \tPECI_PROJ.affiliation\r\n        SET\t\tcanceledDate = CURRENT_TIMESTAMP\r\n        WHERE\taffiliationID = @affID;\r\n\tEND IF;\r\nEND","parameters":[{"name":"INclientEmail","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"dbKey","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-06-25 21:00"};