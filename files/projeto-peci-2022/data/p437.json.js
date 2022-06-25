window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p437","name":"spSelectInstructorProgramFromID","subtype":"PROCEDURE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Selects an Instructor&#39;s Program with a certain ID</span></p><p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">&nbsp;</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"spSelectInstructorProgramFromID"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\n\tIF ((SELECT COUNT(*) FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INinstructorEmail) <> 1) THEN\r\n\t\tCALL spRaiseError();\r\n    ELSE\r\n\t\tSELECT userID INTO @iID FROM (SELECT userID, email FROM PECI_PROJ.SysUser) AS t1 WHERE CONVERT(AES_DECRYPT(t1.email, dbKey) USING UTF8MB4) = INinstructorEmail;\r\n\t\tSELECT programID, pName, pDescription, forPathology, thumbnailPath, videoPath, isShowcaseProg, createDate\r\n\t\tFROM PECI_PROJ.Program\r\n\t\tWHERE creatorIntsID = @iID AND programID = pid;\r\n\tEND IF;\r\nEND","parameters":[{"name":"INinstructorEmail","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}},{"name":"pid","description":null,"mode":"IN","data_type":"int(10, 0)","custom_fields":{}},{"name":"dbkey","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-06-25 21:00"};