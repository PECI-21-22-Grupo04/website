window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3778","name":"program","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Programs (available in the mobile app) made by an Instructor (in the web app)</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"program"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34863","object_id":"column-34863","name":"programID","name_without_path":"programID","description":"Numeric ID used for reference to a Program within the database","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34862","object_id":"column-34862","name":"pName","name_without_path":"pName","description":"Program's Name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34861","object_id":"column-34861","name":"pDescription","name_without_path":"pDescription","description":"Program's Description","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1024","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34858","object_id":"column-34858","name":"forPathology","name_without_path":"forPathology","description":"Program for Clients with these Pathologies","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"64","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34864","object_id":"column-34864","name":"thumbnailPath","name_without_path":"thumbnailPath","description":"Path to the Program's thumbnail picture","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34865","object_id":"column-34865","name":"videoPath","name_without_path":"videoPath","description":"Path to the Program's thumbnail video","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34859","object_id":"column-34859","name":"isPublic","name_without_path":"isPublic","description":"Bit that makes the Program available to the  public or not","is_pk":false,"is_identity":false,"data_type":"bit","data_length":"1","is_nullable":false,"computed_formula":"","default_value":"b'0'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34856","object_id":"column-34856","name":"createDate","name_without_path":"createDate","description":"Date of when the Program was created","is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34860","object_id":"column-34860","name":"isShowcaseProg","name_without_path":"isShowcaseProg","description":"Bit that makes the Program a showcase program or not","is_pk":false,"is_identity":false,"data_type":"bit","data_length":"1","is_nullable":false,"computed_formula":"","default_value":"b'0'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34857","object_id":"column-34857","name":"creatorIntsID","name_without_path":"creatorIntsID","description":"Numeric ID used for reference to an Instructor within the database","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3785","name":"sysinstructor","name_show_schema":"sysinstructor"}]}],"relations":[{"name":"FK_Program_instructorID","title":null,"description":null,"is_user_defined":false,"foreign_table":"program","foreign_table_show_schema":"program","foreign_table_verbose":"program","foreign_table_verbose_show_schema":"program","foreign_table_object_id":"t3778","primary_table":"sysinstructor","primary_table_show_schema":"sysinstructor","primary_table_verbose":"sysinstructor","primary_table_verbose_show_schema":"sysinstructor","primary_table_object_id":"t3785","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"instructorID","foreign_column_path":null,"foreign_column":"creatorIntsID"}],"custom_fields":{}},{"name":"FK_clientPrograms_programID","title":null,"description":null,"is_user_defined":false,"foreign_table":"clientprograms","foreign_table_show_schema":"clientprograms","foreign_table_verbose":"clientprograms","foreign_table_verbose_show_schema":"clientprograms","foreign_table_object_id":"t3773","primary_table":"program","primary_table_show_schema":"program","primary_table_verbose":"program","primary_table_verbose_show_schema":"program","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"programID","foreign_column_path":null,"foreign_column":"progID"}],"custom_fields":{}},{"name":"FK_planIncludes_programID","title":null,"description":null,"is_user_defined":false,"foreign_table":"planincludes","foreign_table_show_schema":"planincludes","foreign_table_verbose":"planincludes","foreign_table_verbose_show_schema":"planincludes","foreign_table_object_id":"t3777","primary_table":"program","primary_table_show_schema":"program","primary_table_verbose":"program","primary_table_verbose_show_schema":"program","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"programID","foreign_column_path":null,"foreign_column":"progID"}],"custom_fields":{}},{"name":"FK_workoutLog_programID","title":null,"description":null,"is_user_defined":false,"foreign_table":"workoutlog","foreign_table_show_schema":"workoutlog","foreign_table_verbose":"workoutlog","foreign_table_verbose_show_schema":"workoutlog","foreign_table_object_id":"t3787","primary_table":"program","primary_table_show_schema":"program","primary_table_verbose":"program","primary_table_verbose_show_schema":"program","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"programID","foreign_column_path":null,"foreign_column":"progID"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"programID","name":"programID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"program","object_name_show_schema":"program","object_type":"TABLE","object_id":"t3778","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"sysinstructor","object_name_show_schema":"sysinstructor","object_type":"TABLE","object_id":"t3785","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"program","object_name_show_schema":"program","object_type":"TABLE","object_id":"t3778","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"clientprograms","object_name_show_schema":"clientprograms","object_type":"TABLE","object_id":"t3773","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"planincludes","object_name_show_schema":"planincludes","object_type":"TABLE","object_id":"t3777","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"workoutlog","object_name_show_schema":"workoutlog","object_type":"TABLE","object_id":"t3787","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2022-06-25 21:00"};