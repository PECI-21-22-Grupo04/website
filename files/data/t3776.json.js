window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3776","name":"physicaldata","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Client&#39;s Physical Data</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"physicaldata"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34847","object_id":"column-34847","name":"physicalDataID","name_without_path":"physicalDataID","description":"Numeric ID used for reference to a Client's Physical Data within the database","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34846","object_id":"column-34846","name":"height","name_without_path":"height","description":"Client's height","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34848","object_id":"column-34848","name":"weight","name_without_path":"weight","description":"Client's weight","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34845","object_id":"column-34845","name":"fitness","name_without_path":"fitness","description":"Client's fitness","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34844","object_id":"column-34844","name":"BMI","name_without_path":"BMI","description":"Client's BMI","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_progressLog_physicaldataID","title":null,"description":null,"is_user_defined":false,"foreign_table":"progresslog","foreign_table_show_schema":"progresslog","foreign_table_verbose":"progresslog","foreign_table_verbose_show_schema":"progresslog","foreign_table_object_id":"t3779","primary_table":"physicaldata","primary_table_show_schema":"physicaldata","primary_table_verbose":"physicaldata","primary_table_verbose_show_schema":"physicaldata","primary_table_object_id":"t3776","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"physicalDataID","foreign_column_path":null,"foreign_column":"physicDataID"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"physicalDataID","name":"physicalDataID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"physicaldata","object_name_show_schema":"physicaldata","object_type":"TABLE","object_id":"t3776","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"progresslog","object_name_show_schema":"progresslog","object_type":"TABLE","object_id":"t3779","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2022-06-25 21:36"};