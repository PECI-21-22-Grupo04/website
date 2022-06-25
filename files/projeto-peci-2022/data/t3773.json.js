window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3773","name":"clientprograms","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Client Programs (available in the mobile app) made by an Instructor (in the web app)</span></p><p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">&nbsp;</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"clientprograms"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34826","object_id":"column-34826","name":"forClientID","name_without_path":"forClientID","description":"Numeric ID used for reference to a Client within the database","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3786","name":"sysuser","name_show_schema":"sysuser"}]},{"id":"column-34827","object_id":"column-34827","name":"progID","name_without_path":"progID","description":"Numeric ID used for reference to a Program within the database","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3778","name":"program","name_show_schema":"program"}]},{"id":"column-34825","object_id":"column-34825","name":"associateDate","name_without_path":"associateDate","description":"Date of when the Instructor associated the program to the Client","is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_clientPrograms_programID","title":null,"description":null,"is_user_defined":false,"foreign_table":"clientprograms","foreign_table_show_schema":"clientprograms","foreign_table_verbose":"clientprograms","foreign_table_verbose_show_schema":"clientprograms","foreign_table_object_id":"t3773","primary_table":"program","primary_table_show_schema":"program","primary_table_verbose":"program","primary_table_verbose_show_schema":"program","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"programID","foreign_column_path":null,"foreign_column":"progID"}],"custom_fields":{}},{"name":"FK_clientPrograms_clientID","title":null,"description":null,"is_user_defined":false,"foreign_table":"clientprograms","foreign_table_show_schema":"clientprograms","foreign_table_verbose":"clientprograms","foreign_table_verbose_show_schema":"clientprograms","foreign_table_object_id":"t3773","primary_table":"sysuser","primary_table_show_schema":"sysuser","primary_table_verbose":"sysuser","primary_table_verbose_show_schema":"sysuser","primary_table_object_id":"t3786","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"userID","foreign_column_path":null,"foreign_column":"forClientID"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"forClientID","name":"forClientID"},{"path":null,"name_without_path":"progID","name":"progID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"clientprograms","object_name_show_schema":"clientprograms","object_type":"TABLE","object_id":"t3773","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"program","object_name_show_schema":"program","object_type":"TABLE","object_id":"t3778","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"sysuser","object_name_show_schema":"sysuser","object_type":"TABLE","object_id":"t3786","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2022-06-25 21:00"};