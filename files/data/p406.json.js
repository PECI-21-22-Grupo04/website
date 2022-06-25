window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p406","name":"spClientReviewInstructor","subtype":"PROCEDURE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Client makes a review of his associated Instructor</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"spClientReviewInstructor"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\n\tIF ((SELECT COUNT(*) FROM (SELECT userID, CONVERT(AES_DECRYPT(email, dbKey) USING UTF8MB4) AS mail FROM PECI_PROJ.SysUser) AS t1 WHERE t1.mail = INclientEmail) <> 1 OR (SELECT COUNT(*) FROM (SELECT userID, CONVERT(AES_DECRYPT(email, dbKey) USING UTF8MB4) AS mail FROM PECI_PROJ.SysUser) AS t1 WHERE t1.mail = INinstructorEmail) <> 1) THEN\r\n\t\tCALL spRaiseError();\r\n    ELSE\r\n\t\tSELECT userID INTO @cID FROM (SELECT userID, CONVERT(AES_DECRYPT(email, dbKey) USING UTF8MB4) AS mail FROM PECI_PROJ.SysUser) AS t1 WHERE t1.mail = INclientEmail;\r\n\t\tSELECT userID INTO @iID FROM (SELECT userID, CONVERT(AES_DECRYPT(email, dbKey) USING UTF8MB4) AS mail FROM PECI_PROJ.SysUser) AS t1 WHERE t1.mail = INinstructorEmail;\r\n\t\t\r\n\t\tIF(INreview IS NULL OR INreview = \"\") THEN\r\n\t\t\tINSERT INTO PECI_PROJ.ReviewLog(revClientID, revInstID, rating) VALUES (@cID, @iID, INrating) ON DUPLICATE KEY UPDATE revClientID = @cID, revInstID = @iID, rating = INrating;\r\n\t\tELSE\r\n\t\t\tINSERT INTO PECI_PROJ.ReviewLog(revClientID, revInstID, rating, review) VALUES (@cID, @iID, INrating, INreview) ON DUPLICATE KEY UPDATE revClientID = @cID, revInstID = @iID, rating = INrating, review = Inreview;\r\n\t\tEND IF;\r\n    END IF;\r\nEND","parameters":[{"name":"INclientEmail","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"INinstructorEmail","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"INrating","description":null,"mode":"IN","data_type":"int(10, 0)","custom_fields":{}},{"name":"INreview","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"dbKey","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-06-25 21:00"};