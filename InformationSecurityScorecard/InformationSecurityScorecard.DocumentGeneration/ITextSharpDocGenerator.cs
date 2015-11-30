using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;

using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.DocumentGeneration
{
    public class ITextSharpDocGenerator
    {
        public void CreateTable()
        {
            var doc = new Document();
            PdfWriter.GetInstance(doc, new FileStream(@"E:\Data\Doc6.pdf", FileMode.Create));
            
            PdfPTable table = new PdfPTable(3);
            PdfPCell cell = new PdfPCell(new Phrase("Header spanning 3 columns"));
            cell.Colspan = 2;
            cell.HorizontalAlignment = 1; //0=Left, 1=Centre, 2=Right
            table.AddCell(cell);
            table.AddCell("Other one");
            table.AddCell("Col 1 Row 1");
            table.AddCell("Col 2 Row 1");
            table.AddCell("Col 3 Row 1");
            table.AddCell("Col 1 Row 2");
            table.AddCell("Col 2 Row 2");
            table.AddCell("Col 3 Row 2");
            Font brown = new Font(Font.FontFamily.TIMES_ROMAN , 9f, Font.NORMAL, new BaseColor(163, 21, 21));
            Chunk cc = new Chunk("Yesss..finally i got brown", brown);
            Paragraph pp = new Paragraph(cc);
            doc.Open();
            doc.Add(new Paragraph("This is the report that is based on ..."));
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(pp);
            doc.Add(new Paragraph(System.Environment.NewLine));
            doc.Add(table);
            //doc.Add(new Paragraph("My first PDF"));
            
            doc.Close();
        }
    }
}
